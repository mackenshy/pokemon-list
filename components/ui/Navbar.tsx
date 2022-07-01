import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

export default function Navbar() {
const { theme, isDark} = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 29px',
      backgroundColor: theme?.colors.gray900.value
    }}>
      <Image 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Icono de la app'
        width={70}
        height={70}
      />
      <Text color="white" h2>P</Text>
      <Text color='white' h3>okemon</Text>

      <Spacer css={{ flex: 1 }} />
      <Text color='white'>Favoritos</Text>
    </div>
  )
}
