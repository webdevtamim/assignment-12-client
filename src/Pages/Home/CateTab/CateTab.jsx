import { useState } from "react";
import useMeals from "../../../hooks/useMeals";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CateMeals from "./CateMeals";

const CateTab = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [meals] = useMeals();
    const breakfast = meals.filter(item => item.selectedCate === 'Breakfast');
    const lunch = meals.filter(item => item.selectedCate === 'Lunch');
    const dinner = meals.filter(item => item.selectedCate === 'Dinner');

    return (
        <div className="max-w-[1400px] mx-auto px-5">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>
                <TabPanel>
                    {
                        meals.map((items, index) => <CateMeals
                            key={index}
                            items={items}
                        ></CateMeals>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        breakfast.map((items, index) => <CateMeals
                            key={index}
                            items={items}
                        ></CateMeals>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        lunch.map((items, index) => <CateMeals
                            key={index}
                            items={items}
                        ></CateMeals>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        dinner.map((items, index) => <CateMeals
                            key={index}
                            items={items}
                        ></CateMeals>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CateTab;