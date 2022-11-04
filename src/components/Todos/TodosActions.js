import styles from './TodosActions.module.css'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodosActions({ resetTodo, actionDelete, disabled }) {
  return (
    <div className={styles.wrap_bnt}>
      <Button
        title="Reset Todos"
        children={<RiRefreshLine />}
        onClick={resetTodo}
      />
      <Button
        title="Clear Complited Todos"
        children={<RiDeleteBin2Line />}
        onClick={actionDelete}
        disabled={disabled}
      />
    </div>
  )
}

export default TodosActions
