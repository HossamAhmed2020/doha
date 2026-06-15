import io

file_path = r'C:\Users\Dell\al-doha-website - Copy\assets\js\product-data.js'

with io.open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace literal \n with actual newlines
# We need to be careful not to replace \\n (escaped backslash n)
fixed_content = content.replace('\\n', '\n')

# Also fix literal \" if they exist
fixed_content = fixed_content.replace('\\"', '"')

with io.open(file_path, 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print("Done fixing the file.")
