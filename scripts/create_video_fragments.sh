for f in "$@"
do
name=$(basename "$f")
dir=$(dirname "$f")
ffmpeg -i "$f" -b 250k -strict experimental -deinterlace -vcodec h264 -acodec aac "../assets/${name%.*}."
echo "$dir/mp4/${name%.*}.mp4"
done