import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";





export default function Index() {
    const [tarefa, setTarefa] = useState("");
    const [listaTarefas, setListaTarefas] = useState<Task[]>([]);

    type Tarefa = {
        id?: number;
        name: string;
        done?: boolean;
    };
    /**
     * Adiciona uma nova tarefa na lista de tarefas
     * @param param0 
     */
    const adicionarTarefa = ({ name, done }: Tarefa) => {
        const data = Date.now(); // gera um id unico utilizando timestamp
        const novaTarefa = { id: data, name, done: false };
        setListaTarefas([...listaTarefas, novaTarefa]);
    }

    return (
        <View style={styles.app}>
            <View style={styles.box}>
                <View style={{ flex: 1, alignItems: "center" }}>                <Text style={styles.title}>To Do REACT</Text>
                <TextInput style={styles.form}
                    onChangeText={setTarefa}
                    value={tarefa}
                    placeholder="Adicionar uma nova tarefa"
                /> <TouchableOpacity style={styles.button} activeOpacity={0.7}
                    onPress={() => {
                        adicionarTarefa({ name: tarefa });
                        setTarefa("");
                    }}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
                </View>
                </View>
            <View>
                <FlatList
                    data={listaTarefas}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <View style={styles.task}>
                            <Text style={styles.taskText}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </View>);
}


const styles = StyleSheet.create({
    app: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#021123',

    },
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0B2027',
        fontFamily: "Space Mono",
        padding: 16,
        minWidth: 400,
        minHeight: 300,
    },
    title: {
        color: '#F6F1D1',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(246, 241, 209, 0.5)',
        fontSize: 24,
        fontFamily: "BioRhyme",
        margin: 8,
    },
    form: {
        backgroundColor: '#FEFEFE',
        padding: 8,
        color: '#180303ff',
        borderColor: '#f80909ff'

    },
    button: {
        backgroundColor: '#8d9df9ff',
        alignItems: "center",
        padding: 8,
    },
    task: {
        backgroundColor: 'rgba(214, 212, 201, 0.17)',
        marginTop: 8,
        padding: 8,
    },
    taskText: {
        fontSize: 16,
        color: 'var(--text)',
        fontFamily: "BioRhymeCustom",
    }
})