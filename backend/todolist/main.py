from fastapi import FastAPI
app=FastAPI()
class Number(BaseModel):
    num:int
@app.post("/check")
def check(data:Number):
    return {"msg":data.num}