import './app-info.css'
const AppInfo = ({employeesLn, increaseLn}) =>{


    return(
        <div className='app-info'>
            <h1>облік співробітників</h1>
            <h2>Загальна кільскість співробітників: {employeesLn}</h2>
            <h2>Премію отримають: {increaseLn}</h2>
        </div>
    )
}

export default AppInfo;