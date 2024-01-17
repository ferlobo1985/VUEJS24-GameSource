<template>
    <div class="awesome_editor">
        <div v-if="editor" class="btn_container">
            <span 
                @click="editor.chain().focus().toggleBold().run()" 
                :class="{ 'is-active': editor.isActive('bold') }"
            >
                Bold
            </span>
            <span 
                @click="editor.chain().focus().toggleItalic().run()" 
                :class="{ 'is-active': editor.isActive('italic') }"
            >
                Italic
            </span>
            <span 
                @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" 
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
            >
                H1
            </span>
            <span 
                @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" 
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
            >
                H2
            </span>
            <span 
                @click="editor.chain().focus().toggleBulletList().run()" 
                :class="{ 'is-active': editor.isActive('bulletList') }"
            >
                bullet list
            </span>
            
        </div>

        <EditorContent :editor="editor"/>
    </div>
</template>

<script setup>
    import { watch } from 'vue'
    import {Editor, EditorContent} from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'

    const emit = defineEmits(['update'])
    const props = defineProps(['content']) /// edit
    const editor = new Editor({
        content:'',
        extensions:[
            StarterKit
        ],
        onUpdate:()=>{
            emit('update',editor.getHTML())
        }
    });

    watch(()=>props.content,()=>{
        loadContent()
    })

    function loadContent(){
        if(props.content){
            editor.commands.setContent(props.content);   
        }
    }
    
    loadContent();
</script>