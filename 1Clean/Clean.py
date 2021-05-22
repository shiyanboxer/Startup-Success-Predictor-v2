import pandas as pd

# Open the xlsx file and store the DataFrame in variable "df" 
df = pd.read_excel("C://Users//shiya//Documents//FF//Startup-Success-Predictor-v2//after.xlsx")

# Remove any NA values
df = df.dropna(axis=0, how='any') # drop rows (axis = 0), if (any) NA appear

# Create new column for success, 1 = “operating or “acquired” and 0 = “closed”
df['success'] = df['status'].apply(lambda x: 0 if 'closed' in x.lower() else 1)