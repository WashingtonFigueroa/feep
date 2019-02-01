package org.fepp.Vista.Fragments;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import org.fepp.R;

public class FragmentEvento extends Fragment {
    public final static String TAG="FragmentEvento";

    public static FragmentEvento newInstance(){
        FragmentEvento fr=new FragmentEvento();
        return fr;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view=inflater.inflate(R.layout.fragment_evento,container,false);


        return view;
    }
}
