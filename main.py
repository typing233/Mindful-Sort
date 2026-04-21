from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI(title="Mindful Sort - 治愈系整理游戏")

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Mindful Sort 游戏运行中"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=2878)
