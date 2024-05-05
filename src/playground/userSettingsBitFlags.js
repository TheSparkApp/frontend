const settings = {
	findThroughContacts: 1n << 0n,
	findThroughFriends: 1n << 1n,
	showSchool: 1n << 2n,
	showSchoolYear: 1n << 3n,
	showBadges: 1n << 4n,
	showBirthday: 1n << 5n,
	showFollower: 1n << 6n,
	showFollowed: 1n << 7n,
	showSingleStatus: 1n << 8n,
	showInterests: 1n << 9n,
};

let userSettings = 0n; // USER.settings privacy_settings SETTINGS AUS DER DB

function setSetting(setting) {
	userSettings |= setting;
}

function isSettingEnabled(setting) {
	return (userSettings & setting) !== 0n;
}

function removeSetting(setting) {
	userSettings &= ~setting;
}

function getEnabledSettings() {
	const enabledSettings = [];

	for (const [settingName, settingValue] of Object.entries(settings)) {
		if (isSettingEnabled(settingValue)) enabledSettings.push(settingName);
	}
	return enabledSettings;
}

setSetting(settings.showSchool);
console.log(isSettingEnabled(settings.showSchool));

console.log(getEnabledSettings());
