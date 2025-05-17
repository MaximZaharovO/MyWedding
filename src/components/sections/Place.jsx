import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default () => {
    return (
        <div className="section-place">
            <div className="section-place__title">
                <div className="section-place__title-img">
                    <img src="place_title_img.png"/>
                </div>
                <div className="section-place__title-text">
                    Место проведения
                </div>
            </div>

            <div className="section-place__info">
                <div className="section-place__info-img">
                    <img src="bogema.png"/>
                </div>
                <div className="section-place__info-text">
                    <div>Manya Bar зал «Bogema» 2 этаж</div>
                    <div>Адрес: просп. Строителей, 18, корп. 5</div>
                </div>
            </div>

            <ManyaMap/>

        </div>
    )
}

 function ManyaMap() {
  return (
    <div className='manya-map'>
        <YMaps>
            <Map height={'45vh'} width={'100%'} defaultState={{ center: [53.766196, 87.109144], zoom: 15 }}>
                <Placemark geometry={[53.766196, 87.109144]} />
            </Map>
        </YMaps>
    </div>
  );
}