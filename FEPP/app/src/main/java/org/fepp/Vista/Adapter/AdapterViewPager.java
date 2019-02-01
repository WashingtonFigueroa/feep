package org.fepp.Vista.Adapter;

import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;

import java.util.ArrayList;

public class AdapterViewPager extends FragmentStatePagerAdapter {
    private ArrayList<Fragment> fragments;
    private ArrayList<String> titulos;

    public AdapterViewPager(FragmentManager fm,
                            ArrayList<Fragment> fragments,
                            ArrayList<String> titulos) {
        super(fm);
        this.fragments=fragments;
        this.titulos=titulos;
    }

    @Override
    public Fragment getItem(int i) {
        return fragments.get(i);
    }

    @Nullable
    @Override
    public CharSequence getPageTitle(int position) {
        return titulos.get(position);
    }

    @Override
    public int getCount() {
        return fragments.size();
    }
}
