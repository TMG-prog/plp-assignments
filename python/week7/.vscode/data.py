# Import necessary libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

try:
    # Load the dataset 
    file_path = r"C:\Users\tracy\plp-assignments\python\week7\.vscode\sales_data.csv"  # Replace with your dataset's file path
    data = pd.read_csv(file_path)

    # Displaying the first few rows of the dataset
    print("First 5 rows of the dataset:")
    print(data.head())

    # Exploring the structure of the dataset
    print("\nDataset Info:")
    print(data.info())

    # Checking for missing values
    print("\nMissing Values:")
    print(data.isnull().sum())

    # Cleaning the dataset by dropping rows with missing values 
    data = data.dropna()
    print("\nDataset after cleaning:")
    print(data.info())

except FileNotFoundError:
    print("Error: The file was not found. Please check the file path.")
except Exception as e:
    print(f"An error occurred: {e}")

 #Basic Data Analysis
try:
    # Computing basic statistics of numerical columns
    print("\nBasic Statistics of Numerical Columns:")
    print(data.describe())

    # Performing groupings and compute the mean of a numerical column for each group
    if "variable" in data.columns and "data_value" in data.columns:
        print("\nAverage Data Value by variable:")
        avg_value_by_variable = data.groupby("variable")["data_value"].mean()
        print(avg_value_by_variable)
    else:
        print("\nThe dataset does not contain 'variable' or 'data_value' columns for grouping.")

except Exception as e:
    print(f"An error occurred during analysis: {e}")

# Data Visualization
try:
    # Seting a theme for the plots
    sns.set_theme(style="whitegrid")

    # Line chart 
    if "year" in data.columns and "data_value" in data.columns:
        plt.figure(figsize=(10, 6))
        sns.lineplot(x="year", y="data_value", data=data)
        plt.title("Trends of Data Value Over Years")
        plt.xlabel("Year")
        plt.ylabel("Data Value")
        plt.show()

    # Bar chart 
    if "source" in data.columns and "data_value" in data.columns:
        plt.figure(figsize=(10, 6))
        sns.barplot(x=avg_value_by_variable.index, y=avg_value_by_variable.values)
        plt.title("Average Data Value by Source")
        plt.xlabel("Source")
        plt.ylabel("Average Data Value")
        plt.xticks(rotation=60)
        plt.show()

    # Histogram 
    if "data_value" in data.columns:
        plt.figure(figsize=(10, 6))
        sns.histplot(data["data_value"], kde=True, bins=20)
        plt.title("Distribution of Data Value")
        plt.xlabel("Data Value")
        plt.ylabel("Frequency")
        plt.show()

    # Scatter plot 
    if "magnitude" in data.columns and "data_value" in data.columns:
        plt.figure(figsize=(10, 6))
        sns.scatterplot(x="magnitude", y="data_value", data=data)
        plt.title("Relationship Between Magnitude and Data Value")
        plt.xlabel("Magnitude")
        plt.ylabel("Data Value")
        plt.show()

except Exception as e:
    print(f"An error occurred during visualization: {e}")
