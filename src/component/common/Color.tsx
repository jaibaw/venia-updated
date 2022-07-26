import { COLOR } from '../../constant/common';

//color component
function Color() {
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                {
                    COLOR.map((key) => {
                        return (
                            <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn--phone--3">
                                <img id={key.id} className='color-list' src={key.img} alt='color-list'>
                                </img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Color;

