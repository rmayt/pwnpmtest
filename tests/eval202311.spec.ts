import { test, expect } from '@playwright/test';
import scenarios from '../resourses/registerScenarios.json';
import { User } from '../types/user';
import { HomePageRahul } from '../pages/home-page-rahul';

type Person = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occupation: string;
  gender: string;
  password: string;
  eyolder: boolean;
  message: string;
};
//for (let i = 0; i < scenarios.length; i++)
scenarios.forEach(scenario => {
  {
    test(`testing with ${scenario.gender}+${scenario['18YearsOld']}+${scenario.occupation}`, async ({page}) => {
      let user = new User(scenario);
      await page.goto('https://rahulshettyacademy.com/client/');
      let hp = new HomePageRahul(page);
      await hp.SubmitFormulary (user)
      expect( await hp.getExpectedMessage(user.eyolder)).toEqual(scenario.message);
    });
  }
});
/*
test('test 16 scenarios', async ({ page }) => {

  let hp = new HomePageR(page);

    for (let scenario = 0; scenario < scenarios.length; scenario++) 
      {
      for (let i = 0; i < Occupation.length; i++) {
      
        let randomString =(Math.random() + 1).toString(36).substring(7);
        let person : Person = {
            firstName : randomString,
            lastName: randomString,
            email: randomString+"@"+randomString + '.com',
            phone: '7854789569',
            occupation: Occupation[i],
            gender: scenarios[scenario].gender,
            password: 'Test1234!',
            eyolder: scenarios[scenario]['18YearsOld']
        };


       
        await page.goto('https://rahulshettyacademy.com/client/');

       // let a =  page.getByRole('button', { name: ' Add To Cart' });
       // console.log(await a.count());
       // for (i=0; i<3;i++)
       // {
       //   await a.nth(i).click();
       // }
        await hp.SubmitFormulary (person)
        expect(await hp.getExpectedMessage(scenarios[scenario]['18YearsOld'])).toEqual(scenarios[scenario].message);
      } 
    }
});*/