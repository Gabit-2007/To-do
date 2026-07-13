import { LoadingDots } from "../components/LoadingDots";
import { InputBox } from "../components/Input";
import { Trash2 } from "lucide-react";
import { useCompleteTask, useCreateTask, useGetTasks } from "../hooks/useTasks";
import { ModalDelete } from "../components/ModalDelete";
import type { Tasks } from "../services/types/tasksType";
import { useState } from "react";
import { toast } from "react-toastify";
export const Route = createFileRoute({
  component: Index,
});

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tarefa, setTarefa] = useState<Tasks | undefined>(undefined);

  const { tasks, isError, isLoading } = useGetTasks();
  const { completeTaskMutate } = useCompleteTask();
  const { onSubmit, register, errors } = useCreateTask();

  function abrirModal(tarefa: Tasks) {
    setTarefa(tarefa);
    setModalOpen(true);
  }

  return (
    <div
      className="flex flex-col justify-items-center 
    items-center min-w-screen min-h-screen p-4 gap-2 bg-primaria"
    >
      <div className="">
        <h1 className="text-3xl font-coiny text-secundaria">To-Do</h1>
      </div>

      <form
        onSubmit={onSubmit}
        className="bg-new-white border-1 border-new-gray shadow-md 
      flex-col rounded-2xl w-full p-2 justify-center items-center"
      >
        <InputBox
          Label="Título"
          error={errors.title?.message}
          {...register("title")}
        />

        <div className="font-elms flex flex-col font-semibold mb-2">
          <label>
            Prioridade <span className="font-normal text-red-800">*</span>
          </label>
          <select
            className="font-normal border-1 border-gray-400 
        p-1 max-w-[50%] rounded-sm text-secundaria"
            {...register("priority")}
          >
            <option className="text-sky-700" value="baixa">
              Baixa
            </option>
            <option className="text-amber-600" value="média">
              Média
            </option>

            <option className="text-red-700" value="alta">
              Alta
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="p-1 md:py-2 md:px-4 bg-emerald-500 
        text-new-white font-elms font-semibold my-1 
        rounded-sm md:rounded-md flex justify-self-end 
        hover:cursor-pointer"
        >
          Adicionar
        </button>
      </form>

      <div className="w-full">
        {isLoading && <Loading />}

        {isError && <Error />}

        {!isError && !isLoading && (
          <table
            className="bg-new-white shadow-lg border-new-gray
        min-w-[90%] w-full rounded-lg"
          >
            <tbody>
              {tasks.map((t) => (
                <tr
                  key={t.id}
                  className={`border-b-1 border-new-gray ${t.completed ? `line-through` : ``}`}
                >
                  <td className="px-2">
                    <input
                      className="w-full"
                      type="checkbox"
                      checked={t.completed}
                      onChange={() => completeTaskMutate.mutate(t)}
                    />
                  </td>

                  <td className="text-secundaria">{t.title}</td>

                  <td>
                    <div
                      className={`md:hidden w-3 h-3 rounded-2xl 
                ${
                  t.priority === "alta"
                    ? "bg-red-700"
                    : t.priority === "média"
                      ? "bg-amber-400"
                      : "bg-sky-500"
                }`}
                    ></div>

                    <p
                      className={`hidden md:inline 
                 ${
                   t.priority === "alta"
                     ? "text-red-700"
                     : t.priority === "média"
                       ? "text-amber-600"
                       : "text-sky-700"
                 }`}
                    >
                      {t.priority} prioridade
                    </p>
                  </td>

                  <td className="px-3 py-2 md:px-1 md:py-3">
                    <button
                      className=" hover:cursor-pointer"
                      onClick={() => abrirModal(t)}
                    >
                      <Trash2 size={20} color="#fb2c36" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <ModalDelete
        isOpen={modalOpen}
        onIsOpenCHange={setModalOpen}
        tarefa={tarefa}
      />
    </div>
  );
}

function Loading() {
  return (
    <div className="flex flex-col">
      <h1>Organizando sua lista...</h1>
      <LoadingDots />
    </div>
  );
}

function Error() {
  return (
    <div>
      <h1>Não foi possível carregar sua lista</h1>
      <p>Não se preocupe! Tente novamente mais tarde.</p>
    </div>
  );
}
