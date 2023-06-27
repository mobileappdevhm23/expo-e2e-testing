describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Button wird angezeigt.', async () => {
    await expect(element(by.id('click-me-button'))).toBeVisible();
  });

  it('"Das funktioniert!" wird nach Drücken des Buttons angezeigt, ebenso wie Icon & Reset-Button.', async () => {
    await element(by.id('click-me-button')).tap();
    await expect(element(by.id('check-icon'))).toBeVisible();
    await expect(element(by.text('Das funktioniert!'))).toBeVisible();
    await expect(element(by.id('reset-button'))).toBeVisible();
  });
});
