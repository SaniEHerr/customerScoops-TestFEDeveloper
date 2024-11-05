interface UserPositionProps {
  name? : string
}

const UserPosition = ({ name }: UserPositionProps) => {
  return (
    <div>
      <p>
        Genial {name}, ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:
      </p>

      <p>
        ¿Cuál es tu cargo/posición dentro de tu empresa?
      </p>

      <div>
        Board Member
      </div>
      <div>
        Board Member
      </div>

    </div>
  )
}

export default UserPosition