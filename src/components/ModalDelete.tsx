import React from "react";
import { useDeleteTask } from "../hooks/useTasks";
import type { Tasks } from "../services/types/tasksType";
import { AnimatePresence, motion } from "framer-motion";

type modalProps = {
  isOpen: boolean;
  onIsOpenCHange: React.Dispatch<React.SetStateAction<boolean>>;
  tarefa: Tasks | undefined;
};

export function ModalDelete({ isOpen, onIsOpenCHange, tarefa }: modalProps) {
  if (!isOpen) return null;

  const { deleteTaskMutate } = useDeleteTask();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="
        inset-0 z-50 fixed
        flex justify-center items-center"
      >
        <div
          className="
            inset-0 absolute
            bg-black/20 backdrop-blur-xs
            cursor-default"
          onClick={() => onIsOpenCHange(false)}
        />

        <div
          className="
            z-0 relative flex flex-col
            bg-new-white 
            justify-items-center items-center
            border-2 border-new-gray rounded-xl
            shadow-xl
            w-90 min-h-60
            py-10 px-10 gap-4"
        >
          <h1 className="text-3xl text-secundaria font-coiny">
            Excluir tarefa
          </h1>

          <p className="text-xl text-center">
            Deseja mesmo excluir a tarefa
            <br />"<span>{tarefa?.title}</span>"?
          </p>

          <div className="flex w-full justify-around items-center">
            <button
              className="p-2 text-lg w-[40%] font-semibold 
                    border-2 border-secundaria/50 rounded-lg 
                    bg-primaria text-secundaria"
              onClick={() => onIsOpenCHange(false)}
            >
              Cancelar
            </button>

            <button
              className="p-2 text-lg w-[40%] font-semibold 
                    border-2 border-red-600 rounded-lg 
                    bg-red-600 text-new-white"
              onClick={() => deleteTaskMutate.mutate(tarefa?.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
