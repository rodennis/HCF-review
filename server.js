import express from 'express'
import mongoose from 'mongoose'
import logger from 'morgan'

const PORT = process.env.PORT || 3000
const app = express()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))