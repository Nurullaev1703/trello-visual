import React from 'react'
import ReactDOM from 'react-dom/client'
import "./src/app/styles/index.css"
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './src/routeTree.gen'
import { Init } from './src/ini/Init'

export const router = createRouter({routeTree})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Init />
)
