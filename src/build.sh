# Shell script to zip the extension into a zip file



# Turn off echoing commands
@echo off



# Function for waiting
wait () {
 # Wait 0.1 Seconds to prevent any random bugs.
 sleep .1
}


# Wait to prevent any random bugs.
wait



# Check if the build directory exists.
if [ -d "build" ]; then
    echo "[build.sh] Directory /build already exists."
else
    echo "[build.sh] Directory /build does not exist. Creating directory..."
    mkdir "build"
    echo "[build.sh] Directory /build created."
fi



# Wait to prevent any random bugs.
wait



# Move to the build directory. Exit if unsuccessful.
cd build || exit


# Wait to prevent any random bugs.
wait




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


# Wait to prevent any random bugs.
wait



# Move up to the project root directory. Exit if unsuccessful.
cd .. || exit



# Wait to prevent any random bugs.
wait




# Create the zip file DiscordHack.zip.
echo "[build.sh] File DiscordHack.zip: Creating..."
zip -r build/DiscordHack.zip DiscordHack
echo "[build.sh] File DiscordHack.zip created."




# Wait to prevent any random bugs.
wait




# Repeat the done message 5 times.
for i in {1..5}
do
  echo "[build.sh] Done."
done


# Wait to prevent any random bugs.
wait


# Successful exit.
exit 0