# Generated by Django 5.2 on 2025-05-06 09:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("citizen", "0007_profileclassification_priority"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="profileclassification",
            name="profile",
        ),
    ]
