import { useEffect, useState } from 'react';
import CurrencyInput from './CurrencyInput';
import DropdownBox from './DropdownBox';
import Tooltip from './Tooltip';

const Home = () => {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState('0');
    const [currentPhone, setCurrentPhone] = useState('');
    const [trustedMaker, setTrustedMaker] = useState();
    const [preferredMake, setPreferredMake] = useState('');
    const [usedPhones, setUsedPhones] = useState(false);
    const [tryAndroid, setTryAndroid] = useState();

    const [screenSize, setScreenSize] = useState('');
    const [screenResolution, setScreenResolution] = useState('');
    const [oled, setOled] = useState(false);
    
    const [cpuCores, setCpuCores] = useState();
    const [ram, setRam] = useState();
    const [storage, setStorage] = useState();

    useEffect(() => {
        document.title = "Create a New Form"
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            general: { name, budget, currentPhone, trustedMaker, preferredMake, usedPhones, tryAndroid }, 
            screen: { screenSize, screenResolution, oled },
            specs: { cpuCores, ram, storage }
        };

        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(form, null, 4)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = name + ".json";

        link.click();
    }

    return (
        <div className="create">
            <h2>Create a New Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-sub">
                    <h3>Basics</h3>
                    <div className="form-row">
                        <label>Your Name? *</label>
                        <input
                            type="text"
                            required
                            value={ name }
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Budget? *</label>
                        <CurrencyInput amount={ budget } setAmount={ setBudget }></CurrencyInput>
                    </div>
                    <div className="form-row">
                        <label>Current Phone? *</label>
                        <input
                            type="text"
                            required
                            value={ currentPhone }
                            onChange={(e) => setCurrentPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Trusted Makers? * <Tooltip tooltip="e.g. Samsung, Google, Sony">
                            <span class="material-symbols-outlined">info</span>
                        </Tooltip></label>
                        <DropdownBox 
                            options={[{value: "yes", title: "Yes"}, {value: "preferred", title: "Preferred"}, {value: "i-just-need-a-phone", title: "I Just Need A Phone"}]} 
                            value={trustedMaker} setValue={setTrustedMaker} required={true} 
                        />
                    </div>
                    <div className="form-row">
                        <label>Preferred Make? ¹</label>
                        <input
                            type="text"
                            value={ preferredMake }
                            onChange={(e) => setPreferredMake(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Include Used Phones? *</label>
                        <input
                            type="checkbox"
                            checked={ usedPhones }
                            onChange={(e) => setUsedPhones(e.target.checked)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Willing to try Android? *</label>
                        <DropdownBox 
                            options={[{value: "preferred", title: "Preferred"}, {value: "yes", title: "Yes"}, {value: "im-an-idiot", title: "iPhone All the Way"}]} 
                            value={tryAndroid} setValue={setTryAndroid} required={true} 
                        />
                    </div>
                </div>

                <div className="form-sub">
                <h3>Screen</h3>
                    <div className="form-row">
                        <label>Screen Size? ¹ <Tooltip tooltip="Measured in Inches">
                            <span class="material-symbols-outlined">info</span>
                        </Tooltip></label>
                        <input
                            type="text"
                            required
                            value={ screenSize }
                            onChange={(e) => setScreenSize(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Screen Resolution? ¹² <Tooltip tooltip="e.g. 1080p or 1920x1080">
                            <span class="material-symbols-outlined">info</span>
                        </Tooltip></label>
                        <input
                            type="text"
                            required
                            value={ screenResolution }
                            onChange={(e) => setScreenResolution(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>OLED Screen? *²</label>
                        <input
                            type="checkbox"
                            checked={oled}
                            onChange={(e) => setOled(e.target.checked)}
                        />
                    </div>
                </div>

                <div className="form-sub">
                <h3>Specs</h3>
                    <div className="form-row">
                        <label>CPU Core Count? *²</label>
                        <DropdownBox 
                            options={[{value: "6", title: "6 Cores"}, {value: "8", title: "8 Cores"}, {value: "not-sure", title: "How Should I Know?"}]} 
                            value={cpuCores} setValue={setCpuCores} required={true} 
                        />
                    </div>
                    <div className="form-row">
                        <label>RAM Amount? *²</label>
                        <DropdownBox 
                            options={[{value: "4gb", title: "4gb"}, {value: "6gb", title: "6gb"}, {value: "8gb", title: "8gb"}, 
                                {value: "12gb", title: "12gb"}, {value: "16gb", title: "16gb"}, {value: "not-sure", title: "The What Now?"}]}
                            value={ram} setValue={setRam} required={true} 
                        />
                    </div>
                    <div className="form-row">
                        <label>Storage Space? *²</label>
                        <DropdownBox 
                            options={[{value: "64gb", title: "64gb"}, {value: "128gb", title: "128gb"}, {value: "256gb", title: "256gb"}, 
                                {value: "512gb", title: "512gb"}, {value: "not-sure", title: "The Huh?"}]}
                            value={storage} setValue={setStorage} required={true} 
                        />
                    </div>
                </div>

                <button>Download "{name}.json"</button>
            </form>

            <p>* Required<br />¹ Leave Blank to set as Current Phone<br />² Increases the Cost</p>
        </div>
    );
};

export default Home;