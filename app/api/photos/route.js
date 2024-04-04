import React from 'react';
import { getAllPhotos } from '@/lib/imageData';
import { NextResponse } from 'next/server';

export async function GET(){
    const data =await getAllPhotos()
    
    return NextResponse.json(data)
}


