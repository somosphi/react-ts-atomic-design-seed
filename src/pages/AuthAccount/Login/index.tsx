import { useAppDispatch, useAppSelector } from '@/hooks/reduxSelectors'
import { fetchAsyncExample } from '@/store/ducks/apiExample'
import { showModal, hideModal } from '@/store/ducks/exampleModal'
import { Button } from 'phi-backoffice-ds-base-components-app'

const Login = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Button
        label='show modal redux'
        variant='contained'
        onClick={() => dispatch(showModal())}
      />

      <Button
        label='close modal example redux'
        variant='contained'
        onClick={() => dispatch(hideModal())}
      />

      <Button
        label='async api redux'
        variant='contained'
        onClick={() => dispatch(fetchAsyncExample())}
      />
    </>
  )
}

export default Login
