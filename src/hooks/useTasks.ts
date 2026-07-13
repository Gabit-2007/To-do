import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getTasks, completeTask, postTask, deleteTask } from "../services/tasks"
import type { Tasks } from "../services/types/tasksType"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { taskSchema, type taskType } from "../schema/taskSchema"


export function useGetTasks() {
    const {data, isLoading, isError} = useQuery<Tasks[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  })
  
  const tasks = data ?? []

  return{ tasks, isLoading, isError}
}

export function useCompleteTask() {
    const queryClient = useQueryClient();
    const completeTaskMutate = useMutation({
        mutationFn: completeTask,

    onSuccess: () => {
      console.log("Feito!")
      toast.success("Tarefa atualizada com sucesso!")
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      })
    },
    onError: () => toast.error("Não foi possível mudar o status da tarefa. Tente novamente mais tarde.")
  })

  return {completeTaskMutate}
}

export function useCreateTask() {
    const queryClient = useQueryClient();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<taskType>({
    resolver: zodResolver(taskSchema),
    mode: "onBlur",
    reValidateMode: "onChange"
  })

    const createTaskMutate = useMutation({
    mutationFn: postTask,

    onSuccess: () => {
      toast.success("Tarefa criada com sucesso!")
      queryClient.invalidateQueries({
        queryKey: ["tasks"]
      }),
      reset()
    },

    onError: () => toast.error("Não foi possível criar a tarefa, tente novamente mais tarde")
  })
    const onSubmit = handleSubmit((task) => createTaskMutate.mutate(task))

    return{onSubmit, createTaskMutate, register, errors}
}

export function useDeleteTask() {
    const queryClient = useQueryClient();
    const deleteTaskMutate = useMutation({
    mutationFn: deleteTask,

    onSuccess: () => {
      toast.success("Tarefa excluída com sucesso")
      queryClient.invalidateQueries({
        queryKey: ["tasks"]
      })
    },

    onError: () => toast.error("Não foi possivel deletar a tarefa, tente novamente mais tarde")
  })

  return {deleteTaskMutate}
}
  