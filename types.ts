export interface User {
 id: string
 email: string
 name: string
 role: "admin" | "user" | "guest"
}

export interface Project {
 id: string
 name: string
 description: string
 ownerId: string
 members: string[]
 status: "active" | "completed" | "archived"
}

export interface Subscription {
 id: string
 userId: string
 plan: "free" | "pro" | "enterprise"
 status: "active" | "canceled"
 price: number
}
