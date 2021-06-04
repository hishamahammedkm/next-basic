import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const price = 0
    return (
        <div>
            <h1 className='title'>Header</h1>
            <style jsx>
               { `
                 .title{
                    color:${price <1 ? 'red' :'green'
                 }
                `}

            </style>
        </div>
    )
}

export default Header
