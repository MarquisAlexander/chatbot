import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Dashboard from '../Dashboard';

export default function PageStart() {
      return (
        <ChatBot
        headerTitle="Atendimento"
          steps={[
            {
              id: '1',
              message: 'Olá bem vindo ao suporte',
              trigger: '2',
            },
            {
                id: '2',
                message: 'Para agilizar o nosso processo de triagem, precisamos de algumas informações',
                trigger: 'start'
            },
            {
                id: 'start',
                message: 'Podemos começar pelo principal...',
                trigger: '3',
            },
            {
                id: '3',
                message: 'Qual o seu nome?',
                trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '4',
            },
            {
              id: '4',
              message: 'Olá {previousValue}! Qual o seu gênero?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'Masculino', label: 'Masculino', trigger: '5' },
                { value: 'Feminino', label: 'Feminino', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'Qual a sua idade?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: 'setor',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 12) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
                id: 'setor',
                message: 'Com qual setor você deseja falar?',
                trigger: 'setores',
            },
            {
                id: 'setores',
                options: [
                    { value: 'Financeiro', label: 'Financeiro', trigger: '7' },
                    { value: 'Comercial', label: 'Comercial', trigger: '7' },
                    { value: 'Recursos Humanos', label: 'Recursos Humanos', trigger: '7' },
                    { value: 'Delivery', label: 'Delivery', trigger: '7' },
                ]
            },
            {
              id: '7',
              message: 'Ótimo! Confira seu resumo',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Dashboard />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Deseja alterar alguma informação',
              trigger: 'atualizar-info',
            },
            {
              id: 'atualizar-info',
              options: [
                { value: 'Sim', label: 'Sim', trigger: 'sim-atualizar' },
                { value: 'Não', label: 'Não', trigger: 'nao-atualizar' },
              ],
            },
            {
              id: 'sim-atualizar',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Nome', trigger: 'atualizar-nome' },
                { value: 'gender', label: 'Gênero', trigger: 'atualizar-genero' },
                { value: 'age', label: 'Idade', trigger: 'atualizar-idade' },
              ],
            },
            {
              id: 'atualizar-nome',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'atualizar-genero',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'atualizar-idade',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'nao-atualizar',
              message: 'Ótimo, agora descreva qual a sua pergunta.',
              end: true,
            },
          ]}
        />
      );
    }