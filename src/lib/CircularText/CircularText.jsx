/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '50%',
    fontWeight: 'bold',
    textAlign: 'center',
}

const letterStyle = {
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // transition: `all 1s cubic-bezier(0, 0, 0, 1) `,
}

const CircularText = (props) => {
    const { text, color = '#000', size = 200 } = props

    return (
        <div
            css={css({
                ...containerStyle,
                color: color,
                width: size,
                height: size,
            })}
        >
            {text.split('').map((letter, i) => {
                const r = (360 / text.length) * i
                const xy = (Math.PI / text.length).toFixed(0) * i
                const trans = `rotateZ(${r}deg) translate3d(${xy}px,${xy}px,0)`
                return (
                    <span
                        key={`ct-${text}-${i}`}
                        style={{
                            ...letterStyle,
                            transform: trans,
                        }}
                    >
                        {letter}
                    </span>
                )
            })}
        </div>
    )
}

export default CircularText
