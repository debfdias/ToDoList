import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../../interfaces/ITask";
import { TaskCard } from "../TaskCard";
import styles from "./tasks.module.css";

interface Props {
  tasks: ITask[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TasksList({ tasks, onComplete, onDelete }: Props) {
  const tasksAmount = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tasks created</p>
          <span>{tasksAmount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed</p>
          <span>
            {completedTasks} of {tasksAmount}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>You have no tasks.</p>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
