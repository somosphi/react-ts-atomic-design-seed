import { useAppSelector } from '@/hooks/reduxSelectors'
import { useSelector } from 'react-redux'
import { ModalContainer } from './styles'

export interface ModalProps {
  children: React.ReactNode
}

export default function Modal(props: ModalProps) {
  const { show } = useAppSelector((state) => state.exampleModal)

  return show ? <ModalContainer>{props.children}</ModalContainer> : null
}
