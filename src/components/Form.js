
/*　cityは打ち込んだデータをstateに保存する、set + データ名はstateにデータを書き込んだり操作する　useStateの中身はstateの初期値*/
/*onChangeハンドラーをinputにつけてinputとsetCityをつなげる*/

const Form = ({setCity, getWeather}) => {
    

    return (
        <form onSubmit={getWeather}>
    
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city} /> 
            
            <button type="submit">Get Weather</button>
    
        </form>
    
    );
};


export default Form;

/*App.js で作った　Form setCity={setCity}は　FormにsetCityのデータを送る。　Formでは、props.○○（今回はsetCity)でデータを受け取る*/