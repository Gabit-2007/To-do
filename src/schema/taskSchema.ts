import { z } from "zod"

export const taskSchema = z.object({
    title: z.string().min(1, "Dê um título à sua tarefa"),
    priority: z.string(),
})

export type taskType = z.infer<typeof taskSchema>