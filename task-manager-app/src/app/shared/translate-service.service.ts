import { Injectable } from '@angular/core';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class TranslateServiceService {
  public languages = ['en', 'ru']
  langSelector: HTMLInputElement | null = document.querySelector('.lang-input');
  language:string = '';

  private dictionary: { [key: string]: {values: { [key: string]: string}} } = {
    en: {
      values: {
        'Create-boards': 'Create boards',
        'Create-columns': 'Create columns',
        'Create-tasks': 'Create tasks',
        'Transfer-tasks': 'Transfer tasks and columns',
        'Update-tasks': 'Update and edit tasks and columns',
        'What-can-do': 'What PMA can do?',
        'Welcome-to': 'Welcome to ',
        'With-this': 'With this',
        'you-can-effortlessly': 'you can effortlessly create customized boards, columns and tasks with unique names and descriptions.',
        'Our-user-friendly': 'And user-friendly interface makes it easy to edit, delete, and reorder tasks, columns and boards with just a few clicks!',
        'login-btn-name': 'Login',
        'sign-up-btn-name': 'SignUp',
        'edit-profile': 'Edit profile',
        'log-out' : 'Log out',
        'Edit-user-profile': 'Edit user profile',
        'New-user-name': 'New user name',
        'New-user-name-error': 'User name is required',
        'New-user-login': 'New user login',
        'New-user-login-error': 'Login is required',
        'New-password': 'New password',
        'New-password-error' : 'Password is required',
        'Confirm-password' : 'Confirm password',
        'Should-match' : 'Should match the password',
        'Delete-user' : 'Delete User',
        'Save' : 'Save',
      },
    },
    ru: {
      values: {
        'Create-boards': 'Создавать доски',
        'Create-columns': 'Создавать колонки',
        'Create-tasks': 'Создавать задачи',
        'Transfer-tasks': 'Переносить задачи и колонки',
        'Update-tasks': 'Обновлять и редактировать задачи и колонки',
        'What-can-do': 'Что позволяет делать PMA?',
        'Welcome-to': 'Добро пожаловать в ',
        'With-this': 'С этим',
        'you-can-effortlessly': 'вы сможете без усилий создавать кастомизированные доски, колонки и задачи с уникальными именами и описанием.',
        'Our-user-friendly': 'А простой и понятный интерфейс делает редактирование, удаление и сортироваку задач простыми и эффективными. Все что потребуется - пара кликов!',
        'login-btn-name': 'Войти',
        'sign-up-btn-name': 'Зарегистрироваться',
        'edit-profile': 'Редактировать профиль',
        'log-out' : 'Выйти',
        'Edit-user-profile': 'Редактирование профиля',
        'New-user-name': 'Новое имя пользователя',
        'New-user-name-error': 'Необходимо ввести имя',
        'New-user-login': 'Новый логин пользователя',
        'New-user-login-error': 'Необходимо ввести логин',
        'New-password': 'Новый пароль',
        'New-password-error' : 'Необходимо ввести пароль',
        'Confirm-password' : 'Подтвердите пароль',
        'Should-match' : 'Пароли должны совпадать',
        'Delete-user' : 'Удалить пользователя',
        'Save' : 'Сохранить',
      },
    },
  }

  constructor() {}

  translate(key: string): string {
    if(this.langSelector?.checked) {
      this.language = 'ru'
    } else {
      this.language = 'en'
    }
    return this.dictionary[this.language].values[key]
  }
}

