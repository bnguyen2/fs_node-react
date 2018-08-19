function localtunnel {
  lt -s bcnkc44 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done