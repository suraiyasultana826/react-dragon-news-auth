import logo from '../../../../src/assets/logo.png'
import moment from 'moment'
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Lorem ipsum dolor sit.</p>
            <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;