## ToNotes == Tasks + Notes combined

```bash
# Start the backend
tty$1> docker compose up --build --detach
tty$1> docker compose logs -f
# Stop the backend
tty$1> docker compose stop

# Start the frontend
tty$2> cd frontend && npm i
tty$2> npm run dev
# Stop the frontend
```
