import{Schema, model}from "mongoose"

export const Esquema1 = new Schema({
    name:{
        type: String
    }
})

export const modeloAlumno = new model ("tabla de alumnos", Esquema1)


