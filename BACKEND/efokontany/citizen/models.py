from django.utils import timezone
from django.db import models
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler, LabelEncoder, OrdinalEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error
from sklearn.linear_model import LinearRegression
import numpy as np

# Create your models here.
class Citizen(models.Model):
    fullname = models.CharField(default="Rakoto", max_length=100)
    email = models.EmailField(default="citizen@gmail.com", max_length=100)
    contact = models.CharField(default="0385944903", max_length=10)
    children = models.IntegerField(default=0)
    job = models.CharField(default="Labor", max_length=100)
    handicap = models.BooleanField(default=False)
    income = models.IntegerField(default=0, max_length=None)
    status = models.CharField(default="Single", max_length=100)
    birthdate = models.DateField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.fullname
    
class ProfileClassification(models.Model):
    citizen = models.ForeignKey(Citizen, on_delete=models.CASCADE)
    priority = models.DecimalField(default=0, max_digits=3, decimal_places=2)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.citizen.fullname
    
    def load_data(self):
        #chargement des données
        self.df = pd.read_excel("./../../Data/data.xlsx")
        
        # 2. Separate features and target
        self.X = self.df.drop("Score", axis=1)
        self.y = self.df["Score"]
        
        # 3. Identify column types
        self.numeric_features = self.X.select_dtypes(include=['int64', 'float64']).columns.tolist()
        self.categorical_features = self.X.select_dtypes(include=['bool']).columns.tolist()

        # 4. Create preprocessing pipeline
        preprocessor = ColumnTransformer([
            ('num', StandardScaler(), self.numeric_features),
            ('cat', OneHotEncoder(handle_unknown='ignore'), self.categorical_features)
        ])
        
                # 5. Create full pipeline with linear regression
        self.model = Pipeline([
            ('preprocessor', preprocessor),
            ('regressor', LinearRegression())
        ])
       
    def train_model(self):
        # 6. Split data (optional - for evaluation)
        X_train, X_test, y_train, y_test = train_test_split(self.X, self.y, test_size=0.2, random_state=42)

        # 7. Train the model
        self.model.fit(X_train, y_train)

        # 8. Evaluate (optional)
        train_score = self.model.score(X_train, y_train)
        test_score = self.model.score(X_test, y_test)
        print(f"Training R²: {train_score:.3f}")
        print(f"Testing R²: {test_score:.3f}")
    
    def predict(self, datas):
        self.load_data()
        self.train_model()
        
        results = []
        
        for data in datas:
            new_data = {
                    'Handicap': str(data["handicap"]),
                    'Income': data["income"],
                    'Children': data["children"],
                    'Status': data["status"],
                    'Job': data["job"],
                    'Age': 30
                }

            new_df = pd.DataFrame([new_data])
            predicted_score = self.model.predict(new_df)
        
            # Ensure score is between 0 and 1 (though linear regression doesn't guarantee this)
            predicted_score = np.clip(predicted_score, 0, 1)[0]
            print(data["fullname"])
            print(f"Predicted Score:  {predicted_score:.2f}")
            results.append(predicted_score)
        
        return results
        
class History(models.Model):
    citizen = models.ForeignKey(Citizen, on_delete=models.CASCADE)
    activity = models.CharField(default="No activity", max_length=100)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.activity