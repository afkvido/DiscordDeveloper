# Shell script to zip the extension into a zip file


# Turn off echoing commands
@echo off


# Check if the build directory exists.
if [ -d "build" ]; then
    echo "[build.sh] Directory /build already exists."
else
    echo "[build.sh] Directory /build does not exist. Creating directory..."
    mkdir "build"
    echo "[build.sh] Directory /build created."
fi


# Move to the build directory. Exit if unsuccessful.
cd build || exit


# Check if the zip file exists.
if [ -e DiscordHack.zip ]
then
    # Delete the zip file if it already exists.
    echo "[build.sh] File DiscordHack.zip exists. Deleting..."
    rm -rf "DiscordHack.zip"
    echo "[build.sh] File DiscordHack.zip deleted."
else
    echo "[build.sh] File DiscordHack.zip does not exist."
fi


# Move up to the project root directory. Exit if unsuccessful.
cd .. || exit


# Create the zip file DiscordHack.zip.
echo "[build.sh] File DiscordHack.zip: Creating..."
zip -r build/DiscordHack.zip DiscordHack
echo "[build.sh] File DiscordHack.zip created."


echo "[build.sh] Done."


# Successful exit.
exit 0