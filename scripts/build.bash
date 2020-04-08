echo "Creating yeomanguide.xml"
sed -e "/localhost:3000/s//stageonesoftware.com\/YeomanGuide\/dist/g" < manifest.xml > yeomanguide.xml
echo "Building production code"
npm run build
echo "Upload ./dist and yeomanguide.xml linto stageonesoftware.com/YeomanGuide"