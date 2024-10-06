import { useEffect, useState } from 'react';
import CurrencyInput from './CurrencyInput';

const Home = () => {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState('£0.00');
    const [currentPhone, setCurrentPhone] = useState('');
    const [trustedMaker, setTrustedMaker] = useState('yes');
    const [preferredMake, setPreferredMake] = useState('');
    const [usedPhones, setUsedPhones] = useState(false);
    const [tryAndroid, setTryAndroid] = useState('yes');

    const [screenSize, setScreenSize] = useState('');
    const [screenSizeMatch, setScreenSizeMatch] = useState('minimum');
    const [screenResolution, setScreenResolution] = useState('');
    const [screenResolutionMatch, setScreenResolutionMatch] = useState('minimum');
    const [oled, setOled] = useState(false);
    
    const [cpuCores, setCpuCores] = useState('6-cores');
    const [ram, setRam] = useState('6gb');
    const [storage, setStorage] = useState('128gb');

    useEffect(() => {
        document.title = "Create a New Form"
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            general: { name, budget, currentPhone, trustedMaker, preferredMake, usedPhones, tryAndroid }, 
            screen: { screenSize,  screenSizeMatch, screenResolution, screenResolutionMatch, oled },
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
                        <label>Trusted Makers? (e.g. Samsung, Google, Sony) *</label>
                        <select 
                            required
                            value={ trustedMaker }
                            onChange={(e) => setTrustedMaker(e.target.value)}
                        >
                            <option value="yes">Yes</option>
                            <option value="preferred">Preferred</option>
                            <option value="i-just-need-a-phone">I Just Need A Phone</option>
                        </select>
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
                            onChange={(e) => {
                                setUsedPhones(e.target.checked);
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Willing to try Android? *</label>
                        <select 
                            required
                            value={ tryAndroid }
                            onChange={(e) => setTryAndroid(e.target.value)}
                        >
                            <option value="only-android">Only Android</option>
                            <option value="yes">Yes</option>
                            <option value="im-an-idiot">iPhone All the Way</option>
                        </select>
                    </div>
                </div>

                <div className="form-sub">
                <h3>Screen</h3>
                    <div className="form-row">
                        <label>Screen Size? (in inches) ¹</label>
                        <input
                            type="text"
                            required
                            value={ screenSize }
                            onChange={(e) => setScreenSize(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Screen Size Match Type? *</label>
                        <select
                            required
                            value={ screenSizeMatch }
                            onChange={(e) => setScreenSizeMatch(e.target.value)}
                        >
                            <option value="minimum">Minimum</option>
                            <option value="Exact">Exact</option>
                            <option value="Maximum">Maximum</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label>Screen Resolution? (e.g. 1080p or 1920x1080) ¹²</label>
                        <input
                            type="text"
                            required
                            value={ screenResolution }
                            onChange={(e) => setScreenResolution(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Screen Resolution Match Type? *</label>
                        <select
                            required
                            value={ screenResolutionMatch }
                            onChange={(e) => setScreenResolutionMatch(e.target.value)}
                        >
                            <option value="minimum">Minimum</option>
                            <option value="Exact">Exact</option>
                            <option value="Maximum">Maximum</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label>OLED Screen? *²</label>
                        <input
                            type="checkbox"
                            checked={ oled }
                            onChange={(e) => {
                                setOled(e.target.checked);
                            }}
                        />
                    </div>
                </div>

                <div className="form-sub">
                <h3>Specs</h3>
                    <div className="form-row">
                        <label>CPU Core Count? *²</label>
                        <select
                            required
                            value={ cpuCores }
                            onChange={(e) => setCpuCores(e.target.value)}
                        >
                            <option value="6-cores">6 Cores</option>
                            <option value="8-cores">8 Cores</option>
                            <option value="whatever-i-want">How Should I Know?</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label>RAM Amount? *²</label>
                        <select 
                            required
                            value={ ram }
                            onChange={(e) => setRam(e.target.value)}
                        >
                            <option value="4gb">4gb</option>
                            <option value="6gb">6gb</option>
                            <option value="8gb">8gb</option>
                            <option value="12gb">12gb</option>
                            <option value="16gb">16gb</option>
                            <option value="whatever-i-want">The What Now?</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label>RAM Amount? *²</label>
                        <select 
                            required
                            value={ storage }
                            onChange={(e) => setStorage(e.target.value)}
                        >
                            <option value="64gb">64gb</option>
                            <option value="128gb">128gb</option>
                            <option value="256gb">256gb</option>
                            <option value="512gb">512gb</option>
                            <option value="whatever-i-want">The Huh?</option>
                        </select>
                    </div>
                </div>

                <button>Download "{ name }.json"</button>
            </form>

            <p>* Required<br />¹ Leave Blank to set as Current Phone<br />² The More/Higher/Ticked, the more Expensive</p>
        </div>
    );
};

export default Home;