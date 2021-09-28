import { useAppDispatch, useAppSelector } from '@/hooks/reduxSelectors'
import { showModal, hideModal } from '@/store/ducks/exampleModal'
import { Button } from 'phi-backoffice-ds-base-components-app'

const Login = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Button
        label='leo'
        variant='contained'
        onClick={() => dispatch(showModal())}
      />

      <Button
        label='close modal example'
        variant='contained'
        onClick={() => dispatch(hideModal())}
      />
    </>
  )
}

export default Login
