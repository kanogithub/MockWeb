import './index.scss'

function AnimatedLetters({ letterClass, strArray, idx }) {
  // HACK: Good Animation Component Example
  return (
    <span>
      {Array.from(strArray).map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
