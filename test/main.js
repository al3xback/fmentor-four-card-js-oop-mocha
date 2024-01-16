import assert from 'assert';
import jsdom from 'jsdom';

import {
	Component,
	Card,
	CardItem,
	CardList,
	Header,
	Section,
	Main,
	Footer,
} from '../js/util.js';

const { JSDOM } = jsdom;

describe('DOM', () => {
	beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	it("should be able to create element via 'Component' class method", () => {
		const component = new Component();
		const paragraphEl = component.createElement('p', 'para', 'Lorem ipsum');
		document.body.appendChild(paragraphEl);

		const isParagraphElExist = !!document.querySelector('.para');
		assert.ok(isParagraphElExist);
	});

	it("should be able to return element attribute data via 'Component' class method", () => {
		const component = new Component();
		const srcData = component.createElementAttribute(
			'src',
			'./images/avatar.jpg'
		);

		const expectedSrcData = {
			name: 'src',
			value: './images/avatar.jpg',
		};

		assert.deepEqual(srcData, expectedSrcData);
	});

	it("should be able to return card data via 'Card' class", () => {
		const cardData = new Card(
			'Supervisor',
			'Monitors activity to identify project roadblocks',
			'./images/icons/supervisor.svg'
		);

		const expectedCardData = {
			id: 'supervisor',
			title: 'Supervisor',
			description: 'Monitors activity to identify project roadblocks',
			imageUrl: './images/icons/supervisor.svg',
		};

		assert.deepEqual(cardData, expectedCardData);
	});

	it("should be able to create card item element via 'CardItem' class", () => {
		const cardData = new Card(
			'Supervisor',
			'Monitors activity to identify project roadblocks',
			'./images/icons/supervisor.svg'
		);
		const cardItem = new CardItem(cardData);
		const cardItemEl = cardItem.render();
		document.body.appendChild(cardItemEl);

		const isCardItemElExist = !!document.querySelector('.card__list-item');
		assert.ok(isCardItemElExist);
	});

	it("should be able to create card list element via 'CardList' class", () => {
		const cardList = new CardList();
		const cardListEl = cardList.render();
		document.body.appendChild(cardListEl);

		const isCardListElExist = !!document.querySelector('.card__list');
		assert.ok(isCardListElExist);
	});

	it("should be able to create header element via 'Header' class", () => {
		const header = new Header();
		const headerEl = header.render();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	it("should be able to create section element via 'Section' class", () => {
		const section = new Section();
		const sectionEl = section.render();
		document.body.appendChild(sectionEl);

		const isSectionElExist = !!document.querySelector('.section');
		assert.ok(isSectionElExist);
	});

	it("should be able to create main element via 'Main' class", () => {
		const main = new Main();
		const mainEl = main.render();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	it("should be able to create footer element via 'Footer' class", () => {
		const footer = new Footer();
		const footerEl = footer.render();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
