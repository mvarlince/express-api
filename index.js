import express  from "express"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

app.get('/coffee', (req, res) => {
  const helloPath = '/Users/vm/boca-code/week3/another-express/hello.html'
    console.log('new request')
    res.sendFile(helloPath)
})

app.listen(process.env.PORT, () => {
    console.log(`listening on localhost ${process.env.PORT}`)
})


