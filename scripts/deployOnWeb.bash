echo "*** Creating manifest"
sed -e "/localhost:3000/s//stageonesoftware.com\/XLray/g" < manifest.xml > xlray.xml
/bin/rm ~/Library/Containers/com.microsoft.Excel/Data/Documents/wef/*
cp xlray.xml ~/Library/Containers/com.microsoft.Excel/Data/Documents/wef
echo "*** Building runtime"
npm run build
/bin/rm -rf XLray
/bin/mv dist XLray
echo "*** Upload XLray and xlray.xml to stageonesoftware.com"
