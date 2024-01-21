type props = {
 text: React.ReactNode
}

function Button({text}: props) {
 return(
  <button>
   {text}
  </button>
 )
}

export default Button